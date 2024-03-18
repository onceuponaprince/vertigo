export interface Button {
    title: string;
    imageUrl: string; 
  }
  
export interface ButtonProps {
    buttons: Button[];
  }

export const Button: React.FC<ButtonProps> = ({ buttons }) => {
    return (
        <ul>
    {buttons.map((button) => (
      <li key={button.title}>
        <h2>{button.title}</h2>
        <p>{button.imageUrl}</p>
      </li>
    ))}
  </ul>
    )
}
