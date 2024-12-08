export type Props = {
  show: boolean;
};

export const Previwer: React.FC<Props> = ({ show }) => {
  return <>{show && <div className="bloc">previwer</div>}</>;
};
