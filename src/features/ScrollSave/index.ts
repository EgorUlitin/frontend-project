export type {
    ScrollSchema,
    ScrollSaveSchems,
} from './model/types/ScrollSaveSchema';
export { getScrollByPath } from './model/selectors/getScroll';
export {
    scrollSaveActions,
    scrollSaveReducer,
} from './model/slices/scrollSaveSlice';
