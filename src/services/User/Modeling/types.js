/**
 * @typedef {Object} UserIdentity
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 */

/**
 * @typedef {Object} UserNutrient
 * @property {string} name
 * @property {"kCal" | "g"} unit
 * @property {number} count
 * @property {React.ElementType} Icon
 */

/**
 * @typedef {Object} UserInformations
 * @property {number} id
 * @property {UserIdentity} identity
 * @property {number} todayScore
 * @property {Array<UserNutrient>} nutrients
 */

/**
 * @typedef {Object} UserActivity
 * @property {string} day
 * @property {number} kilogram
 * @property {number} calories
 */

/**
 * @typedef {Object} UserAverageSession
 * @property {number} day
 * @property {number} sessionLength
 */

/**
 * @typedef {Object} UserPerformance
 * @property {number} value
 * @property {"Cardio" | "Energie" | "Endurance" | "Force" | "Vitesse" | "Intensité"} kind
 */

/**
 * @typedef {Object} UserAllData
 * @property {UserInformations} informations
 * @property {Array<UserActivity>} activity
 * @property {Array<UserAverageSession>} averageSessions
 * @property {Array<UserPerformance>} performance
 */