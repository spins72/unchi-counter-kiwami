import { defineStore } from "pinia";

export const useUnchiStore = defineStore('UnchiStore', {
    state: () => ({
        finalTranscript: '',
        interimTranscript: '',
        unchiCounts: 0,
        unchiText: '',
    }),
    getters: {
    },
    actions: {
        countUnchi(str: string) {
            const count = (str.split('うんち').length - 1)
            this.unchiCounts += count;
            for (let i=0; i<count; i++) {
                this.unchiText += '💩';
            }
        },
    }   
})