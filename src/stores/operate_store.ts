import { create } from 'zustand'

type OperateStoreType = {
    sideBarSizeFlag: boolean
    changeSideBarSizeFlag: () => void
};
const OperateStore = create<OperateStoreType>((set) => ({
    sideBarSizeFlag: false,
    changeSideBarSizeFlag: () => set((state) => ({sideBarSizeFlag: !state.sideBarSizeFlag}))
}))

export default OperateStore