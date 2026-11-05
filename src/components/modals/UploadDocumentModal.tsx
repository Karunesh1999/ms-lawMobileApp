import { useState, useRef, type ChangeEvent, type DragEvent } from 'react';
import { X, Upload, CircleCheck, FileText, AlertCircle } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';

interface UploadDocumentModalProps {
  onClose: () => void;
  onUploadSuccess?: (fileName: string) => void;
}

export function UploadDocumentModal({ onClose, onUploadSuccess }: UploadDocumentModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const validateAndUpload = (file: File) => {
    setErrorMessage(null);

    // Validate size (Max 10 MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setErrorMessage('File size exceeds the 10 MB limit. Please select a smaller file.');
      return;
    }

    // Validate extension
    const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file format. Please upload a PDF, JPG, or PNG file.');
      return;
    }

    // Valid file -> Start upload simulation
    setSelectedFile(file);
    setStatus('uploading');
    setProgress(15);

    let currentProgress = 15;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 25) + 15;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setStatus('success');
          if (onUploadSuccess) {
            onUploadSuccess(file.name);
          }
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, 180);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndUpload(e.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    setErrorMessage(null);
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDone = () => {
    setSelectedFile(null);
    setStatus('idle');
    setProgress(0);
    setErrorMessage(null);
    onClose();
  };

  return (
    <ModalWrapper onClose={status === 'uploading' ? () => {} : handleDone}>
      {status === 'success' ? (
        <div className="success-state">
          <CircleCheck size={42} />
          <h2>Document uploaded</h2>
          <p>
            <strong>{selectedFile?.name}</strong> has been encrypted and securely shared with your
            legal team.
          </p>
          <button type="button" className="primary-button wide" onClick={handleDone}>
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="modal-header">
            <div>
              <p className="eyebrow">YOUR CASE</p>
              <h2>Upload a document</h2>
            </div>
            {status !== 'uploading' && (
              <button
                type="button"
                className="icon-button"
                onClick={handleDone}
                aria-label="Close upload modal"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,image/png,image/jpeg,application/pdf"
            className="hidden"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {status === 'uploading' ? (
            <div className="dropzone border-solid border-[#075cae]/40 bg-[#f4f9fd] py-8">
              <div className="w-12 h-12 rounded-full bg-[#e8f2fa] flex items-center justify-center text-[#075cae] mb-1">
                <FileText size={24} />
              </div>
              <strong className="text-center truncate max-w-[280px]">
                {selectedFile?.name}
              </strong>
              <span className="text-[11px] text-[#8a9bab]">
                {selectedFile ? formatFileSize(selectedFile.size) : ''}
              </span>

              {/* Progress bar */}
              <div className="w-full max-w-[260px] bg-[#e5eef5] h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-[#075cae] h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[10px] text-[#075cae] font-semibold mt-1">
                Uploading... {progress}%
              </span>
            </div>
          ) : (
            <div
              className={`dropzone transition-colors ${
                isDragging ? 'border-[#075cae] bg-[#eaf4fb]' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload size={24} />
              <strong>Choose a file to upload</strong>
              <span>PDF, JPG or PNG · Max 10 MB</span>
              <button
                type="button"
                className="secondary-button"
                onClick={handleBrowseClick}
              >
                Browse files
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 mt-3 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[11px]">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="modal-note">
            Your documents are encrypted and only shared with your authorized legal team.
          </p>
        </>
      )}
    </ModalWrapper>
  );
}

export default UploadDocumentModal;
