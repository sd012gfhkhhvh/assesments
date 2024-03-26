// Task 1 : You have 3 timestamps for list of users along with the device details : logged_in, logged_out, 
// and lastSeenAt (for the device during the log in period). Please note: Users can log in from multiple 
// devices, users are generally logged in for a longer duration of time 6 months or so.

// Mention the logic to figure out monthly logged in and active users

interface User {
    user_details: {
        _id: string
    },
    device_details: [], // array of multiple devices
    logged_in: Date;
    logged_out?: Date;
    lastSeenAt: Date;
}

type Activity = {loggedInUser: number, activeUser: number}

type MonthlyUserActivityData = Map<string, Activity>


const getMonthlyUserAnalytics = (users: User[]) => {
    const userActivity: MonthlyUserActivityData = new Map();

    users.forEach(user => {
        const loggedinMonthYearKey = `${user.logged_in.getMonth() + 1}-${user.logged_in.getFullYear()}`
        const lastSeenMonthYear = `${user.lastSeenAt.getMonth() + 1}-${user.lastSeenAt.getFullYear()}`

        //check logged in status
        if(!userActivity.has(loggedinMonthYearKey)){
            userActivity.set(loggedinMonthYearKey, {loggedInUser: 1, activeUser: 1})
        }
        else {
            userActivity.set(loggedinMonthYearKey, {loggedInUser: userActivity.get(loggedinMonthYearKey)?.loggedInUser! + 1, activeUser: userActivity.get(loggedinMonthYearKey)?.activeUser! + 1})
        }

        //user is already loggedin. Consider lastSeenAt to determine if the user was active during the month 
        if(!user.logged_out || (user.logged_out.valueOf() > user.logged_in.valueOf())){
            if(lastSeenMonthYear !== loggedinMonthYearKey){                
                if(userActivity.has(lastSeenMonthYear)){
                    userActivity.set(lastSeenMonthYear, {loggedInUser: userActivity.get(loggedinMonthYearKey)?.loggedInUser! + 1, activeUser: userActivity.get(loggedinMonthYearKey)?.activeUser! + 1})
                }
                else {
                    userActivity.set(lastSeenMonthYear, {loggedInUser: 1, activeUser: 1})
                }
            }
        }
        
    })

    return userActivity;
}

// Example usage:
const users: User[] = [
    { user_details: {_id: "abc"},  device_details: [], logged_in: new Date('2023-01-15'), logged_out: new Date('2023-01-17'), lastSeenAt: new Date('2023-01-17') },
    { user_details: {_id: "bch"},  device_details: [], logged_in: new Date('2023-01-20'), logged_out: new Date('2023-01-21'), lastSeenAt: new Date('2023-01-21') },
    { user_details: {_id: "ihe"},  device_details: [], logged_in: new Date('2023-02-05'), logged_out: new Date('2023-02-06'), lastSeenAt: new Date('2023-02-06') },
    // Add more users as needed
];

const monthlyUserAnalytics = getMonthlyUserAnalytics(users);
console.log(monthlyUserAnalytics);

// logged_id > logged_out 
// logged_id <= logged_out

// lastSeen > logged_in

// lastSeen > logged_out
// lastSeen < logged_out
// lastSeen = logged_out
