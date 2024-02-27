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
        {/* Date */}
        {new Date().toLocaleDateString()} の報告です <br />
        <br />
      </div>

      {todayTasks && (
        <div>
          <h4>本日の作業</h4>
          {/* Display today's tasks */}
          <p>{todayTasks}</p>
        </div>
      )}
      {tomorrowPlans && (
        <div>
          <h4>明日の予定</h4>
          {/* Display tomorrow's plans */}
          <p>{tomorrowPlans}</p>
        </div>
      )}
      {consultation && (
        <div>
          <h4>相談事項</h4>
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
