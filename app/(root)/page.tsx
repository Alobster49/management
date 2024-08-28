import Bar from '@/components/Bar'
import React from 'react'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">Prozessinformationen</h2>
      <div className="mt-5 grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
          <input type="text" id="id" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="0.2.15" disabled />
        </div>
        <div>
          <label htmlFor="bezeichnung" className="block text-sm font-medium text-gray-700">Bezeichnung</label>
          <input type="text" id="bezeichnung" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Acquisition and Kundenpflege" />
        </div>
        {/* Repeat for other fields */}
      </div>
      <div className="flex justify-end space-x-3 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Drucken</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">Weiter</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Abbrechen</button>
      </div>
    </div>
  );
};


export default Home
