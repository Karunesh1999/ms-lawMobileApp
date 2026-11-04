import React, { useState, useRef } from 'react';
import {
  X,
  UploadCloud,
  CheckCircle2,
  FileCheck,
  Trash2,
  Download
} from 'lucide-react';

interface MedicalMileageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MedicalMileageModal: React.FC<MedicalMileageModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [workerName, setWorkerName] = useState('');
  const [mileageFile, setMileageFile] = useState<File | null>(null);
  const [receiptsFile, setReceiptsFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [saveDraftNotice, setSaveDraftNotice] = useState(false);

  const mileageInputRef = useRef<HTMLInputElement>(null);
  const receiptsInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleMileageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMileageFile(e.target.files[0]);
    }
  };

  const handleReceiptsFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptsFile(e.target.files[0]);
    }
  };

  const handleSaveDraft = () => {
    setSaveDraftNotice(true);
    setTimeout(() => setSaveDraftNotice(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workerName.trim()) {
      alert("Please enter the Injured Worker's Name.");
      return;
    }
    if (!mileageFile) {
      alert("Please upload your completed Medical Mileage Form.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setWorkerName('');
    setMileageFile(null);
    setReceiptsFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header Bar */}
        <div className="bg-[#0E336B] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <h3 className="text-sm sm:text-base font-bold font-display tracking-tight text-white">
              Medical Mileage Reimbursement Form
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 sm:py-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-lg font-black text-slate-900 mb-1">
                Form Successfully Submitted!
              </h4>
              <p className="text-xs text-slate-600 mb-2">
                Injured Worker: <span className="font-semibold text-slate-900">{workerName}</span>
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                Your mileage reimbursement form and receipts have been safely forwarded to our legal team.
              </p>
              <button
                onClick={handleResetAndClose}
                className="bg-[#0E336B] hover:bg-[#1D4ED8] text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Instructions Paragraph */}
              <div className="text-slate-600 text-[11px] sm:text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                If you have to travel to get treatment for your work injury, you are entitled to re-payment of your travel costs. The mileage rate is .56 cents ($0.56) per mile. Mileage for reasonable travel to the pharmacy, parking, bridge tolls, public transportation and other travel-related costs are also included. Complete this form. Attach receipts. Send the original to the insurance company and keep a copy. Do not send the original or a copy to the local Workers' Compensation Appeals Board (WCAB) or the information and assistance officer. If your travel costs are not paid within 60 days, contact the information and assistance officer. Enter the information below to calculate your mileage reimbursement.
              </div>

              {/* Injured Worker's Name */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  Injured Worker's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={workerName}
                  onChange={(e) => setWorkerName(e.target.value)}
                  placeholder="First & Last Name"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E336B] bg-white"
                />
                <span className="text-[10px] text-slate-400 mt-0.5 block">First & Last Name</span>
              </div>

              {/* Step by Step Instructions */}
              <div className="border-t border-b border-slate-200 py-3 space-y-2 text-xs">
                {/* 1 */}
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-600">1.</span>
                  <a
                    href="https://s3.amazonaws.com/law-media/uploads/2213/171216/original/i_and_a_mileageform2020.docx?1640218987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-red-600 hover:text-red-700 underline flex items-center gap-1 uppercase tracking-wide text-[11px] sm:text-xs"
                  >
                    CLICK HERE TO DOWNLOAD THE FORM <Download className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="font-bold text-[#0E336B]">2.</span>
                  <div>
                    <span className="font-bold uppercase text-[10px] sm:text-[11px] block text-slate-900">
                      FILL OUT THE MILEAGE FORM YOU DOWNLOAD ON YOUR PHONE, TABLET, COMPUTER OR LAPTOP
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      (YOU CAN PRINT THE FORM FILL IT OUT BY HAND, BUT YOU WOULD NEED A SCANNER TO UPLOAD)
                    </span>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="font-bold text-[#0E336B]">3.</span>
                  <span className="font-bold uppercase text-[10px] sm:text-[11px] text-slate-900">
                    SAVE YOUR COMPLETED FORM WITH CHANGES
                  </span>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="font-bold text-[#0E336B]">4.</span>
                  <span className="font-bold uppercase text-[10px] sm:text-[11px] text-slate-900">
                    UPLOAD THE COMPLETED FORM BELOW :
                  </span>
                </div>
              </div>

              {/* Uploader 1: Completed Mileage Form */}
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-800 mb-1">
                  File Upload - UPLOAD COMPLETED MILEAGE FORM
                </label>
                <input
                  type="file"
                  ref={mileageInputRef}
                  onChange={handleMileageFileChange}
                  accept=".pdf,.docx,.doc,.jpg,.jpeg,.png"
                  className="hidden"
                />

                {mileageFile ? (
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-emerald-300 bg-emerald-50 text-xs text-emerald-900">
                    <div className="flex items-center gap-2 truncate">
                      <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate font-semibold">{mileageFile.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMileageFile(null)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => mileageInputRef.current?.click()}
                    className="border-2 border-dashed border-blue-300 hover:border-[#0E336B] rounded-lg p-3 text-center cursor-pointer bg-blue-50/50 hover:bg-blue-50 transition-colors"
                  >
                    <UploadCloud className="w-6 h-6 text-[#0E336B] mx-auto mb-1" />
                    <span className="text-xs font-bold text-[#0E336B] block">Browse Files</span>
                    <span className="text-[10px] text-slate-500">Drag and drop files here</span>
                  </div>
                )}
                <span className="text-[10px] font-bold text-slate-400 mt-1 block uppercase">
                  INSERT COMPLETED MILEAGE FORM HERE
                </span>
              </div>

              {/* Uploader 2: Parking / Toll Receipts */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  IF ANY Kindly attach the PDF or JPG file of the PARKING /TOLL receipts here:
                </label>
                <input
                  type="file"
                  ref={receiptsInputRef}
                  onChange={handleReceiptsFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />

                {receiptsFile ? (
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-emerald-300 bg-emerald-50 text-xs text-emerald-900">
                    <div className="flex items-center gap-2 truncate">
                      <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate font-semibold">{receiptsFile.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReceiptsFile(null)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => receiptsInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-slate-400 rounded-lg p-3 text-center cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <UploadCloud className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                    <span className="text-xs font-semibold text-slate-700 block">Browse Files</span>
                    <span className="text-[10px] text-slate-400">Drag and drop files here</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Save & Submit */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
                {saveDraftNotice && (
                  <span className="text-[11px] text-emerald-600 font-semibold mr-auto animate-pulse">
                    Draft saved to browser session
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Save
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 text-xs font-bold rounded-lg bg-[#0E336B] hover:bg-[#1D4ED8] text-white shadow-sm transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Uploading...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default MedicalMileageModal;

