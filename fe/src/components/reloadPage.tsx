export default function ReloadPage() {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <button onClick={reloadPage} type="button" className="cursor-pointer">
      Tải lại
    </button>
  );
}
