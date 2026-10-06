import "reflect-metadata";
import { Container } from "inversify";
import HomeViewModel, { IHomeViewModel } from "@/lib/home/view-model/home-view-model";
import { HomeType } from "./type.injector";

const container = new Container();

container.bind<IHomeViewModel>(HomeType.ViewModel).to(HomeViewModel);

export default container;
