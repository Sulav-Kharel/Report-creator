import React from "react";

interface Props {
  names: string[];
  greetings: string[];
  endGreetings: string[];
  todayTasks: string;
  tomorrowPlans: string;
  consultation: string;
}

const Report: React.FC<Props> = ({
  names,
  greetings,
  endGreetings,
  todayTasks,
  tomorrowPlans,
  consultation,
}) => {
  const copyReportToClipboard = () => {
    let reportContent = "";
    //Names
    if (names) {
      reportContent += `\n${names}\n`;
    }
    //Greetings
    if (greetings) {
      reportContent += `\n${greetings}\n\n`;
    }
    // Add today's date
    if (todayTasks || tomorrowPlans || consultation) {
      reportContent += `${new Date().toLocaleDateString()} の報告です\n\n`;
    }

    // Add today's tasks
    if (todayTasks) {
      reportContent += `[本日の作業]\n${todayTasks}\n\n`;
    }

    // Add tomorrow's plans
    if (tomorrowPlans) {
      reportContent += `[明日の予定]\n${tomorrowPlans}\n\n`;
    }

    // Add consultation
    if (consultation) {
      reportContent += `[相談事項]\n${consultation}\n\n`;
    }

    //endGreetings
    if (endGreetings) {
      reportContent += `\n${endGreetings}\n\n`;
    }

    navigator.clipboard
      .writeText(reportContent.trim())
      .then(() => alert("Report copied to clipboard"))
      .catch((error) => console.error("Failed to copy report: ", error));
  };

  return (
    <div>
      <div>
        <div className="report-icon">
          <i className="fa-solid fa-copy" onClick={copyReportToClipboard}></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        {/* Names */}
        {names.map((name, index) => (
          <strong key={index}>{name}</strong>
        ))}
        {/* Greetings */}
        <br />
        {greetings.map((greeting, index) => (
          <strong key={index}>{greeting}</strong>
        ))}
        <br />
        <br />
        {/* Date */}
        {todayTasks && (
          <div>
            {new Date().toLocaleDateString()} の報告です <br />
          </div>
        )}
        <br />
      </div>

      {todayTasks && (
        <div>
          <h5>[本日の作業]</h5>
          <p>{todayTasks}</p>
        </div>
      )}
      {tomorrowPlans && (
        <div>
          <h5>[明日の予定]</h5>
          <p>{tomorrowPlans}</p>
        </div>
      )}
      {consultation && (
        <div>
          <h5>[相談事項]</h5>
          <p>{consultation}</p>
        </div>
      )}
      <div>
        <p>
          <br />
          {endGreetings.map((endGreeting, index) => (
            <strong key={index}>{endGreeting}</strong>
          ))}
          <br />
        </p>
      </div>
    </div>
  );
};

export default Report;
