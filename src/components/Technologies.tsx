import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export default function Technologies() {
  const [techData, setTechData] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [myStack, setMyStack] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data: Technology[] = await response.json();
        setTechData(data);
      } catch (err) {
        console.error('Error loading data.json:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = myStack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }

    setMyStack([...myStack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (tech: Technology) => {
    setMyStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.info('Your stack has been cleared.');
  };

  if (loading) {
    return <div className="loading-text">Loading technologies...</div>;
  }

  return (
    <section className="tech-section" id="technologies">
      <div className="tech-header">
        <h2 className="tech-title">
          Explore the <span className="highlight">Technologies</span>
        </h2>
        <p className="tech-subtitle">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="tech-layout">

        <div className="tech-cards-grid">
          {techData.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div className="tech-card-header">
                <img src={tech.icon} alt={tech.name} className="tech-card-icon" />
                {tech.badge && <span className="tech-badge">{tech.badge}</span>}
              </div>

              <h3 className="tech-card-name">{tech.name}</h3>
              <p className="tech-card-desc">{tech.description}</p>

              <div className="tech-tags">
                <span className="tech-tag">{tech.category}</span>
                <span className="tech-tag">{tech.difficulty}</span>
                <span className="tech-rating">★ {tech.rating}</span>
              </div>

              <button 
                className="add-to-stack-btn"
                onClick={() => handleAddToStack(tech)}
                disabled={myStack.some(item => item.id === tech.id)}
              >
                {myStack.some(item => item.id === tech.id) ? '✓ Added to Stack' : 'Add to Stack'}
              </button>
            </div>
          ))}
        </div>

        <div className="your-stack-panel">
          <h3 className="stack-panel-title">Your Stack</h3>
          {myStack.length === 0 ? (
            <div className="empty-stack">
              <p>No technologies selected yet.</p>
              <div className="empty-box">Your stack is empty.</div>
            </div>
          ) : (
            <>
              <ul className="selected-stack-list">
                {myStack.map((item) => (
                  <li key={item.id} className="selected-stack-item">
                    <img src={item.icon} alt={item.name} className="stack-item-icon" />
                    <div className="stack-item-info">
                      <span className="stack-item-name">{item.name}</span>
                      <span className="stack-item-category">{item.category}</span>
                    </div>
                    <button
                      type="button"
                      className="stack-item-remove"
                      aria-label={`Remove ${item.name} from your stack`}
                      onClick={() => handleRemove(item)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="remove-all-btn"
                onClick={handleRemoveAll}
                disabled={myStack.length === 0}
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
