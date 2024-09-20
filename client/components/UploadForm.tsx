import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/UploadForm.module.css';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(''); // Estado para o sucesso da cópia

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus(''); // Limpar status ao selecionar novo arquivo
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Selecione um arquivo primeiro.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Arquivo enviado com sucesso!');
      setFileUrl(response.data.url);
    } catch (error) {
      setUploadStatus('Falha ao enviar o arquivo. Tente novamente.');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fileUrl)
      .then(() => {
        setCopySuccess('Link copiado com sucesso!');
      })
      .catch(() => {
        setCopySuccess('Falha ao copiar o link. Tente novamente.');
      });
  };

  return (
    <div className={styles.uploadContainer}>
      <img src="/icons/logo.png" alt="Logo da Empresa" className={styles.logo} />
      <h1 className={styles.title}>Envie seu arquivo</h1>
      <input type="file" onChange={handleFileChange} className={styles.fileInput} />
      <button onClick={handleUpload} className={styles.uploadButton}>
        Enviar Arquivo
      </button>
      {uploadStatus && (
        <p className={uploadStatus.includes('sucesso') ? styles.successStatus : styles.errorStatus}>
          {uploadStatus}
        </p>
      )}
      {fileUrl && (
        <div className={styles.fileUrlContainer}>
          <p className={styles.fileUrl}>
            Arquivo salvo em: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
          </p>
          <button onClick={handleCopyLink} className={styles.copyButton}>
            Copiar link
          </button>
          {copySuccess && <p className={styles.copyStatus}>{copySuccess}</p>}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
