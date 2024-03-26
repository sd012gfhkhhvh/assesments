interface Metric {
  header: {
    text: string;
    amount: string;
  };
  info: {
    badge: string;
    text: string;
    color: string;
    bg_color: string;
  };
}

export const metricData: Metric[] = [
  {
    header: {
      text: "Revenue",
      amount: "$56,945",
    },
    info: {
      badge: "+45%",
      text: "From 4.6%",
      color: "#20C997",
      bg_color: "#DCFFF5"
    },
  },
  {
    header: {
      text: "Users",
      amount: "76.8%",
    },
    info: {
      badge: "+45%",
      text: "From 4.6%",
      color: "#DC3545",
      bg_color: "#ffe0e3"
    },
  },
  {
    header: {
      text: "New Signups",
      amount: "116",
    },
    info: {
      badge: "0.00",
      text: "",
      color: "#9D9FA1",
      bg_color: "#F2F4F7"
    },
  },
  {
    header: {
      text: "Retention",
      amount: "12.67%",
    },
    info: {
      badge: "+45%",
      text: "From 4.6%",
      color: "#20C997",
      bg_color: "#DCFFF5"
    },
  },
];
