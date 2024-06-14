export const useEventHubStore = defineStore('global-event-hub', {

  state: () => ({
    events: null,
  }),

  getters: {},

  actions: {
    async createRealtimeEventHubSnapshot(activeOrgId) {
      const eventsRef = doc(db, 'eventHub', activeOrgId)

      onSnapshot(eventsRef, (snapshot) => {
        this.events = snapshot.data() || null
      })
    },
  },
})
