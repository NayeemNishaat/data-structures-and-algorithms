setTimeout(() => {
  const size = (audio.duration * 24000) / 1000;
  $("#audioFiles").append(`
    <div class="upload-box">
      <ul>
        <li>
          <div class="upload-file-name">
            <p>AI Generated Audio</p>
            <span>${size} KB</span>
            ${audio}
          </div>
        </li>
        <li>
          <div class="progress-box">
            <span class="progressfill"></span>
          </div>
          <p>100%</p>
        </li>
        <li>
          <img src="/assets/createCampaign/images/delete.png" onclick="removeAudioFile(${i})" />
        </li>
      </ul>
    </div>
`);
}, 1000);
