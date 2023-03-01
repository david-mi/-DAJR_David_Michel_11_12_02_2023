import { CalorieIcon, GlucideIcon, ProteinIcon, LipidIcon } from "../../../components/svg";

class UserModeling {

  /**
   * @param {Object} serviceData user informations from api or mock
   * @returns modeled user informations data
   */

  informations(serviceData) {
    const { id, userInfos, todayScore, score, keyData } = serviceData.data;

    return {
      id,
      identity: {
        firstName: userInfos?.firstName || "",
        lastName: userInfos?.lastName || "",
        age: userInfos?.age || 0,
      },
      todayScore: (score || todayScore || 0) * 100,
      nutrients: [
        {
          name: "Calories",
          unit: "kCal",
          count: keyData?.calorieCount || 0,
          Icon: CalorieIcon
        },
        {
          name: "Protéines",
          unit: "g",
          count: keyData?.proteinCount || 0,
          Icon: ProteinIcon
        },
        {
          name: "Glucides",
          unit: "g",
          count: keyData?.carbohydrateCount || 0,
          Icon: GlucideIcon
        },
        {
          name: "Lipides",
          unit: "g",
          count: keyData?.lipidCount || 0,
          Icon: LipidIcon
        }
      ]
    };
  }

  /**
   * @param {Object} serviceData user activity from api or mock
   * @returns modeled user activity data
   */

  activity(serviceData) {
    const { sessions } = serviceData.data;

    return Array.isArray(sessions)
      ? sessions.map(({ day, kilogram, calories }, index) => {
        return {
          day: day || "",
          kilogram: kilogram || 0,
          calories: calories || 0,
          index: index + 1
        };
      })
      : [];
  }

  /**
   * @param {Object} serviceData user activity from api or mock
   * @returns modeled user average sessions data
   */

  averageSessions(serviceData) {
    const { sessions } = serviceData.data;

    const days = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D"
    };

    return Array.isArray(sessions)
      ? sessions.map(({ day, sessionLength }) => {
        return {
          day: days[day] || 0,
          sessionLength: sessionLength || 0,
        };
      })
      : [];
  }

  /**
   * @param {Object} serviceData user activity from api or mock
   * @returns modeled user performance data
   */

  performance(serviceData) {
    const { data } = serviceData.data;

    const kindNames = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    };

    return Array.isArray(data)
      ? data
        .map(({ value, kind }) => {
          return {
            value: value || 0,
            kind: kindNames[kind] || 0
          };
        })
        .reverse()
      : [];
  }
}

export default UserModeling;