import { CalorieIcon, GlucideIcon, ProteinIcon, LipidIcon } from "../../components/svg";

class UserModeling {
  informations(informations) {
    const { id, userInfos, todayScore, keyData } = informations;

    return {
      id,
      identity: {
        firstName: userInfos?.firstName || "",
        lastName: userInfos?.lastName || "",
        age: userInfos?.lastName || "",
      },
      todayScore: todayScore || 0,
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

  activity(activity) {
    const { userId, sessions } = activity;

    const sessionSchema = Array.isArray(sessions)
      ? sessions.map(({ day, kilogram, calories }) => {
        return {
          day: day || "",
          kilogram: kilogram || 0,
          calories: calories || 0
        };
      })
      : [];

    return {
      userId,
      sessions: sessionSchema
    };
  }

  averageSessions(averageSessions) {
    const { userId, sessions } = averageSessions;

    const sessionSchema = Array.isArray(sessions)
      ? sessions.map(({ day, sessionLength }) => {
        return {
          day: day || 0,
          sessionLength: sessionLength || 0,
        };
      })
      : [];

    return {
      userId,
      sessions: sessionSchema
    };
  }

  performance(performance) {
    const { userId, data } = performance;

    const kindNames = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    };

    const kindDataSchema = Array.isArray(data)
      ? data.map(({ value, kind }) => {
        return {
          value: value || 0,
          kind: kindNames[kind]
        };
      })
      : [];

    return {
      userId,
      data: kindDataSchema
    };
  }
}

export default UserModeling;