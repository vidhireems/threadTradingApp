import './ColorsSpec.css'; // Styling
import color1 from '../assets/color1.jpg';
import color2 from '../assets/color2.jpg';
import color3 from '../assets/color3.jpg';

const colorImages = [
  color1, color2, color3
];

const ColorsSpec = () => {
  const handleClick = (src) => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = src;
  };

  const closeModal = () => {
    document.getElementById('imageModal').style.display = 'none';
  };

  return (
    <div className="colors-spec-page">
      <h2>Available Colors</h2>
      <div className="color-grid">
        {colorImages.map((img, index) => (
          <div key={index} className="color-item" onClick={() => handleClick(img)}>
            <img src={img} alt={`Color ${index + 1}`} />
            <p>Color {index + 1}<br /><span className="click-to-enlarge">Click to enlarge</span></p>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      <div id="imageModal" className="modal">
        <span className="close" onClick={closeModal}>&times;</span>
        <img className="modal-content" id="modalImage" />
      </div>
    </div>
  );
};

export default ColorsSpec;
