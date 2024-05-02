import myCV from '@documents/Tigran-Martirosyan-CV.pdf';

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = myCV;
  link.setAttribute('download', 'Tigran_Martirosyan_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleDownloadCV;
