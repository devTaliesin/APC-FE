import { create } from 'zustand'

type OperateStoreType = {
    sideBarSizeFlag: boolean
    videoSourceFormFlag: boolean
    
    changeSideBarSizeFlag: () => void
    changeVideoSourceFormFlag: () => void
};
const OperateStore = create<OperateStoreType>((set) => ({
    sideBarSizeFlag: false,
    videoSourceFormFlag: false,

    changeSideBarSizeFlag: () => set((state) => ({sideBarSizeFlag: !state.sideBarSizeFlag})),
    changeVideoSourceFormFlag: () => set((state) => ({videoSourceFormFlag:!state.videoSourceFormFlag}))
}))

export default OperateStore