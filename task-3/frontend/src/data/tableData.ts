
enum Status {
    Active = "Active",
    Pending = "Pending",
    Cancelled = "Cancelled",
}

enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
}

enum Groups {
    Design = "Design",
    Finance = "Finance",
    Coding = "Coding",
    Marketing = "Marketing",
}

export const tableData = [
    {
        source: {
            logo: "../assets/bolt.png",
            name: "Zeppin"
        },
        amount: "656.00",
        status: Status.Active,
        user_id: "114423",
        joined: Months.October,
        group: Groups.Design
    },
    {
        source: {
            logo: "../assets/bolt.png",
            name: "Figma"
        },
        amount: "864.00",
        status: Status.Pending,
        user_id: "76223",
        joined: Months.June,
        group: Groups.Finance
    },
    {
        source: {
            logo: "../assets/bolt.png",
            name: "Meta"
        },
        amount: "176.00",
        status: Status.Cancelled,
        user_id: "89453",
        joined: Months.March,
        group: Groups.Coding
    },
    {
        source: {
            logo: "../assets/bolt.png",
            name: "Angular"
        },
        amount: "49.00",
        status: Status.Active,
        user_id: "11467",
        joined: Months.February,
        group: Groups.Marketing
    },
    {
        source: {
            logo: "../assets/bolt.png",
            name: "Vue"
        },
        amount: "999.00",
        status: Status.Active,
        user_id: "67385",
        joined: Months.October,
        group: Groups.Finance
    },
]
