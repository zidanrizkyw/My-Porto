import { IHomeViewModel } from "@/lib/home/view-model/home-view-model";
import container from "./container.injector";
import { HomeType } from "./type.injector";

const homeVM = container.get<IHomeViewModel>(HomeType.ViewModel);

export { homeVM };
