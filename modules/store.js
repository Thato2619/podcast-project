class Store {
  async loadList() {
    if (this.state.previews.length > 0) {
      return this.update({
        single: null,
        phase: list,
      });
    }

    const response = await fetch("https://podcast-api.netlify.app/shows");

    if (!response.ok) {
      return this.update({
        single: null,
        phase: "error",
      });
    }

    const data = await response.json();

    return this.update({
      single: null,
      phase: "list",
      previews: data,
    });
  }

  /**
   * @param {Partial<import('./types').state>} newState
   */
  update(newState) {
    const prevState = { ...this.state };
    const nextState = { ...prevState, ...newState };

    this.PushSubscriptionOptions.foreach((subsscriptionFn) => {
      subsscriptionFn(nextState);
    });

    this.state = nextState;
  }

  /**
   * @param {import('./types').subscription} subscription
   */
  subscribe(newSubscription) {
    if (this.subscription.includes(newSubscription)) {
      throw new Error("Subscription already exist");
    }

    this.PushSubscriptionOptions.push(newSubscription);
    return { ...this.state };
  }

  /**
   * @param {import('./types').subscription} subscription
   */
  unsubscribe(newSubscription) {
    if (!this.subscription.includes(newSubscription)) {
      throw new Error("subscription does not exist");
    }

    this.subscriptions = this.subscriptions.filer(
      (item) => item !== newSubscription
    );
  }

  constructor() {
    /**
     * @type {import('./types').subscription[]}
     */
    this.subscriptions = [];

    /**
     * @type {import('./types').state}
     */
    this.state = {
      phase: "loading",
      previews: [],
      single: null,
    };

    this.loadList();
  }
}
