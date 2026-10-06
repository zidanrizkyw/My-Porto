import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import HomeState from "../state/home-state";
import { SectionId, sectionIds } from "../constant";
import { Experience, experienceData } from "../data/experience-data";
import { Project, projectData } from "../data/project-data";
import { Certification, certificationData, educationData } from "../data/credential-data";
import { profileData } from "../data/profile-data";

export interface IHomeViewModel {
  getHomeState: () => HomeState;
  getProfile: () => typeof profileData;
  getExperiences: () => Experience[];
  getProjects: () => Project[];
  getProjectBySlug: (slug: string) => Project | undefined;
  getAdjacentProjects: (slug: string) => { previous?: Project; next?: Project };
  getEducation: () => typeof educationData;
  getCertifications: () => Certification[];
  getSectionIds: () => readonly SectionId[];
  setSpotlight: (x: number, y: number) => void;
  observeSections: () => () => void;
}

@injectable()
export default class HomeViewModel implements IHomeViewModel {
  private homeState: HomeState;

  constructor() {
    this.homeState = new HomeState();

    makeAutoObservable(this);
  }

  getHomeState = () => {
    return this.homeState;
  };

  getProfile = () => {
    return profileData;
  };

  getExperiences = () => {
    return experienceData;
  };

  getProjects = () => {
    return projectData;
  };

  getProjectBySlug = (slug: string) => {
    return projectData.find((project) => project.slug === slug);
  };

  // Neighbours in list order, wrapping around so every page links both ways.
  getAdjacentProjects = (slug: string) => {
    const index = projectData.findIndex((project) => project.slug === slug);
    if (index === -1) return {};
    const count = projectData.length;
    return {
      previous: projectData[(index - 1 + count) % count],
      next: projectData[(index + 1) % count],
    };
  };

  getEducation = () => {
    return educationData;
  };

  getCertifications = () => {
    return certificationData;
  };

  getSectionIds = () => {
    return sectionIds;
  };

  setSpotlight = (x: number, y: number) => {
    this.homeState.setSpotlight(x, y);
  };

  // Highlights the nav item of the section crossing the upper part of the
  // viewport. Returns a cleanup function for useEffect.
  observeSections = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            this.homeState.setActiveSection(entry.target.id as SectionId);
          });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // The last section is too short to reach the observed band, so mark it
    // active once the page bottom is reached.
    const handleScroll = () => {
      const { scrollHeight } = document.documentElement;
      if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
        this.homeState.setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  };
}
