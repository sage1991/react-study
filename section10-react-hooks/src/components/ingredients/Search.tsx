import React, { FC, memo } from "react";
import { Card } from "../UI/Card";
import "./Search.css";

export const Search: FC = memo((props) => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
})