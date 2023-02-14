export const usersMock = {
    "12": {
        main: {
            id: 12,
            userInfos: {
                firstName: 'Gontran',
                lastName: 'MockTar',
                age: 50,
            },
            score: 0.3,
            keyData: {
                calorieCount: 2500,
                proteinCount: 90,
                carbohydrateCount: 150,
                lipidCount: 120
            }
        },
        activity: {
            userId: 12,
            sessions: [
                {
                    day: '2023-02-',
                    kilogram: 76,
                    calories: 240
                },
                {
                    day: '2023-02-',
                    kilogram: 18,
                    calories: 220
                },
                {
                    day: '2023-02-',
                    kilogram: 79,
                    calories: 280
                },
                {
                    day: '2023-02-',
                    kilogram: 78,
                    calories: 290
                },
                {
                    day: '2023-02-',
                    kilogram: 78,
                    calories: 160
                },
                {
                    day: '2023-02-',
                    kilogram: 18,
                    calories: 162
                },
                {
                    day: '2023-02-',
                    kilogram: 79,
                    calories: 390
                }
            ]
        },
        averageSessions: {
            userId: 12,
            sessions: [
                {
                    day: 1,
                    sessionLength: 30
                },
                {
                    day: 2,
                    sessionLength: 23
                },
                {
                    day: 3,
                    sessionLength: 45
                },
                {
                    day: 4,
                    sessionLength: 50
                },
                {
                    day: 5,
                    sessionLength: 0
                },
                {
                    day: 6,
                    sessionLength: 0
                },
                {
                    day: 7,
                    sessionLength: 60
                }
            ]
        },
        performance: {
            userId: 12,
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 80,
                    kind: 1
                },
                {
                    value: 120,
                    kind: 2
                },
                {
                    value: 140,
                    kind: 3
                },
                {
                    value: 50,
                    kind: 4
                },
                {
                    value: 200,
                    kind: 5
                },
                {
                    value: 90,
                    kind: 6
                }
            ]
        }
    },
    "18": {
        main: {
            id: 18,
            userInfos: {
                firstName: 'Jean Mock',
                lastName: 'Dupont',
                age: 20,
            },
            score: 0.3,
            keyData: {
                calorieCount: 2500,
                proteinCount: 90,
                carbohydrateCount: 150,
                lipidCount: 120
            }
        },
        activity: {
            userId: 18,
            sessions: [
                {
                    day: '2023-02-',
                    kilogram: 76,
                    calories: 240
                },
                {
                    day: '2023-02-',
                    kilogram: 18,
                    calories: 220
                },
                {
                    day: '2023-02-',
                    kilogram: 79,
                    calories: 280
                },
                {
                    day: '2023-02-',
                    kilogram: 78,
                    calories: 290
                },
                {
                    day: '2023-02-',
                    kilogram: 78,
                    calories: 160
                },
                {
                    day: '2023-02-',
                    kilogram: 18,
                    calories: 162
                },
                {
                    day: '2023-02-',
                    kilogram: 79,
                    calories: 390
                }
            ]
        },
        averageSessions: {
            userId: 18,
            sessions: [
                {
                    day: 1,
                    sessionLength: 30
                },
                {
                    day: 2,
                    sessionLength: 23
                },
                {
                    day: 3,
                    sessionLength: 45
                },
                {
                    day: 4,
                    sessionLength: 50
                },
                {
                    day: 5,
                    sessionLength: 0
                },
                {
                    day: 6,
                    sessionLength: 0
                },
                {
                    day: 7,
                    sessionLength: 60
                }
            ]
        },
        performance: {
            userId: 18,
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 80,
                    kind: 1
                },
                {
                    value: 120,
                    kind: 2
                },
                {
                    value: 140,
                    kind: 3
                },
                {
                    value: 50,
                    kind: 4
                },
                {
                    value: 200,
                    kind: 5
                },
                {
                    value: 90,
                    kind: 6
                }
            ]
        }
    }
};