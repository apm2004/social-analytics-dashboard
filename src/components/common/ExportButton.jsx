import { Download, FileText, File } from 'lucide-react';
import { useState } from 'react';

export default function ExportButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = (format) => {
    alert(`Exporting data as ${format}... (Mock function)`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span className="font-medium">Export</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              <button
                onClick={() => handleExport('CSV')}
                className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
              >
                <FileText className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export as CSV</span>
              </button>
              <button
                onClick={() => handleExport('PDF')}
                className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
              >
                <File className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export as PDF</span>
              </button>
              <button
                onClick={() => handleExport('JSON')}
                className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
              >
                <File className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export as JSON</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}