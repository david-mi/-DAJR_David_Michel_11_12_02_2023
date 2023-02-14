class UserModeling {
  mainModeling(identity) {
    const { id, userInfos, todayScore, keyData } = identity;

    return {
      id,
      identity: {
        firstName: userInfos?.firstName || "",
        lastName: userInfos?.lastName || "",
        age: userInfos?.lastName || "",
      },
      todayScore: todayScore || 0,
      nutrient: {
        calorieCount: keyData?.calorieCount || 0,
        proteinCount: keyData?.proteinCount || 0,
        carbohydrateCount: keyData?.carbohydrateCount || 0,
        lipidCount: keyData?.lipidCount || 0,
      }
    };
  }

  activityModeling(activity) {
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

  averageSessionsModeling(averageSessions) {
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

  performanceModeling(performance) {
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