// Report.tsx
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
  return (
    <div>
      <div>
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
          {/* Display today's tasks */}
          <p>{todayTasks}</p>
        </div>
      )}
      {tomorrowPlans && (
        <div>
          <h5>[明日の予定]</h5>
          {/* Display tomorrow's plans */}
          <p>{tomorrowPlans}</p>
        </div>
      )}
      {consultation && (
        <div>
          <h5>[相談事項]</h5>
          {/* Display consultation */}
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
