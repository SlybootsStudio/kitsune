import { createStore } from "vuex";

import skills from "@/data/skills";
import * as expUtil from "@/helpers/experience.js";

export default createStore({
  state: {
    skills: {
      climbing: 0,
      healing: 0,
      tracking: 0
    },
    actionSummary: {
      content: "...",
      results: [
        {
          resource: "experience",
          amount: 10
        },
        {
          resource: "gold",
          amount: 1
        }
      ]
    },
    spiritGuide: {
      step: 0,
      progress: 0
    },
    effects: [
      {
        effectId: "aspectoftheBear",
        modifier: [
          {
            type: "health",
            amount: 20,
            amountType: "percent"
          }
        ],
        actionsRemaining: 240
      }
    ],
    actionLog: []
  },
  mutations: {},
  actions: {},
  getters: {
    getSkillExperience(state, skillId) {
      const exp = state.skills[skillId];
      return exp;
    },
    getSkillLevel(state, skillId) {
      /* From User Data */
      const exp = state.skills[skillId];

      /* From Content Data */
      const skill = skills.filter(skill => skill.id == skill)[0];

      /* Helper */
      const level = expUtil.getLevel(exp, skill);

      return level;
    }
  },
  modules: {}
});

// Get Skill Xp.
// Get Level
// Get Experience to next level.

/*
BASE 100

LEVEL     BASE    SCALE   TNL
1         100     1       100
2         100             200       
3         100             300
4         100             400
5






*/
