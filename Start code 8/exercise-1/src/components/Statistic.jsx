function Statistic({ results }) {
  const scores = results.map((student) => student.score);

  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  return (
    <div className="statistics">
      <div>
        <p>AVERAGE</p>
        <h2>{average.toFixed(0)}</h2>
      </div>

      <div>
        <p>MIN</p>
        <h2>{min}</h2>
      </div>

      <div>
        <p>MAX</p>
        <h2>{max}</h2>
      </div>
    </div>
  );
}

export default Statistic;
