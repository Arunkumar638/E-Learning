"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { getSubCategory } from "@/actions/otherActions";

interface combineSubCategory {
  categorytitle: string;
  subcategorytitle: string;
  image: String;
  status: String;
  _id: String;
}

const SubBar = ({ category }: any) => {
  const [subcategories, setSubCategories] = useState<combineSubCategory[]>([]);
  useEffect(() => {
    getSubCategory().then((data) => {
      if (data) {
        setSubCategories(data.data);
      }
    });
  }, []);
  return (
    <>
      {subcategories.map((subcategory, index) => (
        category == subcategory.categorytitle &&
        <ul className="dropdown-menu" key={index}>
          <li className="nav-item">
            <a href={`/ourcourses/?=${subcategory.categorytitle}`} className="nav-link">
              {subcategory.subcategorytitle}
            </a>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SubBar;