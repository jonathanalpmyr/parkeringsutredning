import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

export const useStore = createWithEqualityFn(
  (set) => ({
    contactModal: false,
    setContactModal: (value) => set({ contactModal: value }),

    selectedService: null,
    setSelectedService: (value) => set({ selectedService: value }),
  }),

  shallow
)
