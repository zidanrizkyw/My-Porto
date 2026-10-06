import { makeAutoObservable } from "mobx";
import { SectionId } from "../constant";

export default class HomeState {
  private activeSection: SectionId = "about";
  private spotlightX: number = 0;
  private spotlightY: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getActiveSection() {
    return this.activeSection;
  }

  setActiveSection(value: SectionId) {
    this.activeSection = value;
  }

  getSpotlight() {
    return { x: this.spotlightX, y: this.spotlightY };
  }

  setSpotlight(x: number, y: number) {
    this.spotlightX = x;
    this.spotlightY = y;
  }
}
