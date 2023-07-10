import React from 'react';

const ListedJobs = () => {
  return (
    <div className="text-light-primary">
      <div className="bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold">
        <h2>Listed Jobs</h2>
      </div>
      <div className="w-full flex items-center justify-center p-[2rem]">
        <div className="rounded-lg overflow-hidden">
          <table className="w-[70vw] bg-white border border-gray-200 ">
            <thead className="bg-gray-100 border-b text-lg">
              <tr className="border-2">
                <th className="border-r py-[1rem] px-4 text-left">Job Title</th>
                <th className="border-r py-[1rem] px-4 text-left">Company</th>
                <th className="border-r py-[1rem] px-4 text-left">Posted Date</th>
                <th className="border-r py-[1rem] px-4 text-left">Deadline</th>
                <th className="border-r py-[1rem] px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2">
                <td className="border-r py-[1rem] px-4">Data 1</td>
                <td className="border-r py-[1rem] px-4">Data 2</td>
                <td className="border-r py-[1rem] px-4">Data 3</td>
                <td className="border-r py-[1rem] px-4">Data 4</td>
                <td className="border-r py-[1rem] px-4">Data 5</td>
              </tr>
              <tr className="border-2">
                <td className="border-r py-[1rem] px-4">Data 4</td>
                <td className="border-r py-[1rem] px-4">Data 5</td>
                <td className="border-r py-[1rem] px-4">Data 6</td>
                <td className="border-r py-[1rem] px-4">Data 7</td>
                <td className="border-r py-[1rem] px-4">Data 8</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListedJobs;
