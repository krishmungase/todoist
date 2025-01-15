import { Popconfirm } from "antd";

const ConfirmationPopUp = ({
  children,
  fn,
  title,
  isLoading,
  description,
  icon,
}) => {
  return (
    <Popconfirm
      title={title}
      description={description}
      icon={icon}
      okButtonProps={{ loading: isLoading, style: { boxShadow: "none" } }}
      onConfirm={fn}
    >
      {children}
    </Popconfirm>
  );
};

export default ConfirmationPopUp;
