export const VisibilityControl = ({ isChecked, setShowComplited, cleanTasks }) => {
  const handleDelete = () => {
    if (window.confirm('Estas seguro que deseas eliminar?')) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch ">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowComplited(e.target.checked)}
        />{' '}

        <label>Show Tasks done</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        {' '}
        Clear{' '}
      </button>
    </div>
  );
};
