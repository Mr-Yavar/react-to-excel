import React, { forwardRef } from "react";

// Define a type for the table data

export const SampleTable: React.FC = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="table" id={"content"}>
      <div className="aw-full border-collapse rounded-md shadow-lg dark:bg-dark">
        <table className="table-bordered table-fixed" id="test">
          <thead className="">
            <tr className="rounded-t-md bg-blue-500 text-white dark:border-white-dark dark:text-white-dark">
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>تاریخ</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>شیفت</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>میزان کل تولید روز</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>برنامه تولید رسمی</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>درصد انحراف از برنامه رسمی</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>برنامه تولید عملیاتی</span>
              </th>
              <th
                className="p-3 text-center text-sm font-semibold dark:border-white-dark"
                colSpan={1}
                rowSpan={1}
              >
                <span>درصد انحراف از برنامه عملیاتی</span>
              </th>
            </tr>
          </thead>
        </table>
        <div
          className="overflow-y-auto bg-gray-100 dark:border-white-dark dark:bg-black"
          style={{
            maxHeight: "calc(-24em + 100dvh)",
            minHeight: "calc(-24em + 100dvh)",
          }}
        >
          <table className="table-bordered w-full table-fixed">
            <tbody className="bg-white dark:bg-gray-900">
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۷</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4635.36</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>153.512</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>153.512</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4504.38</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>149.146</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>149.146</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4897.32</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>162.244</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>162.244</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>86.58</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.886</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.886</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>85.47</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.849</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.849</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۱۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>84.36</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.812</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.812</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4852.92</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>160.764</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>160.764</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4797.42</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>158.914</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>158.914</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4724.16</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>156.472</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>156.472</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>8.88</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.704</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.704</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>8.88</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.704</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.704</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>5.55</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.815</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-0.815</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۴</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۴</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۴</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۵</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۵</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۵</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۶</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۶</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۶</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۷</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۷</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۷</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۸</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۲۹</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>-1</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۳۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>254.19</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>7.473</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>7.473</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۳۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>155.4</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4.18</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>4.18</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۸/۳۰</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>89.91</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>30</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.997</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>40</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>1.997</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۱</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۲</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>عصر</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۳</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>شب</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
              <tr className="transition-colors odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 dark:odd:bg-black dark:even:bg-black-dark-light dark:hover:bg-gray-700">
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>۱۴۰۳/۹/۴</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>صبح</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
                <td className="border-b border-gray-200 px-4 py-3 text-center text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <div>0</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="css-b62m3t-container">
          <span
            id="react-select-9-live-region"
            className="css-1f43avz-a11yText-A11yText"
          />
          <span
            aria-live="polite"
            aria-atomic="false"
            aria-relevant="additions text"
            role="log"
            className="css-1f43avz-a11yText-A11yText"
          />
          <div className="css-13cymwt-control">
            <div className="css-hlgwow">
              <div className="css-1dimb5e-singleValue">جمع</div>
              <div className="css-19bb58m" data-value="">
                <input
                  className=""
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  id="react-select-9-input"
                  spellCheck="false"
                  tabIndex={0}
                  type="text"
                  aria-autocomplete="list"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="combobox"
                  aria-activedescendant=""
                  defaultValue=""
                  style={{
                    color: "inherit",
                    background: "0px center",
                    opacity: 1,
                    width: "100%",
                    gridArea: "1 / 2",
                    font: "inherit",
                    minWidth: 2,
                    border: 0,
                    margin: 0,
                    outline: 0,
                    padding: 0,
                  }}
                />
              </div>
            </div>
            <div className="css-1wy0on6">
              <span className="css-1u9des2-indicatorSeparator" />
              <div
                className="css-1xc3v61-indicatorContainer"
                aria-hidden="true"
              >
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-tj5bde-Svg"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <table className="table-bordered table-fixed">
          <tfoot>
            <tr>
              <th className="p-3 text-center text-sm font-semibold">-</th>
              <th className="p-3 text-center text-sm font-semibold">
                576660.500
              </th>
              <th className="p-3 text-center text-sm font-semibold">
                2700.000
              </th>
              <th className="p-3 text-center text-sm font-semibold">212.578</th>
              <th className="p-3 text-center text-sm font-semibold">
                3600.000
              </th>
              <th className="p-3 text-center text-sm font-semibold">212.578</th>
            </tr>
          </tfoot>
        </table>
        <div className="flex !w-full items-center justify-between rounded-b-md bg-gray-200 p-2 dark:bg-black">
          <div className="mx-5 flex w-full self-center">
            تعداد کل آیتم‌ها : 126
          </div>
          <div className="flex w-full select-none items-center justify-center gap-1">
            <button className="dark:btn-dark rounded-full border-2 border-primary bg-gray-300 p-2 hover:cursor-pointer hover:bg-primary hover:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
              </svg>
            </button>
            <button className="dark:btn-dark rounded-full border-2 border-primary bg-gray-300 p-2 hover:cursor-pointer hover:bg-primary hover:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
            <div className="flex w-28 justify-center rounded-3xl border-2 border-primary bg-gray-300 p-1 dark:border-white-dark dark:bg-black">
              2 از 3
            </div>
            <button className="dark:btn-dark rounded-full border-2 border-primary bg-gray-300 p-2 hover:cursor-pointer hover:bg-primary hover:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button
              className="dark:btn-dark rounded-full border-2 border-primary bg-gray-300 p-2 hover:cursor-pointer hover:bg-primary hover:text-white"
              disabled=""
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
                <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
              </svg>
            </button>
          </div>
          <div className="flex w-full items-center justify-end gap-1 self-end">
            <span>تعداد آیتم در صفحه: </span>
            <select className="form-input h-9 w-20 !appearance-auto">
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SampleTable;
