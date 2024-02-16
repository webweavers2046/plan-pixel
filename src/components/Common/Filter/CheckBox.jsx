const CheckBox = () => {
  return (
    <div>
      <label class="form-control">
        <input type="checkbox" name="checkbox" />
        Checkbox
      </label>

      <label class="form-control">
        <input type="checkbox" name="checkbox-checked" checked />
        Checkbox - checked
      </label>
    </div>
  );
};
export default CheckBox;
