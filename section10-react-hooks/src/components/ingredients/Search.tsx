import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Card } from "../UI/Card";
import "./Search.css";


interface SearchProps {
  onFilterChange: (filter: string) => void;
}

const Search: FC<SearchProps> = (props) => {
  const { onFilterChange } = props;
  const [ filter, setFilter ] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => onFilterChange(filter), 300);
    return () => clearTimeout(timer);
  }, [ filter, onFilterChange ]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filter} onChange={onChange}/>
        </div>
      </Card>
    </section>
  );
}

const SearchWithMemo = memo(Search);

export { SearchWithMemo as Search };