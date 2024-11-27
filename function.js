window.function = function(steps, currentStep, primaryColor) {
  // Retrieve values or set defaults
  const stepsValue = steps.value || "One, Two, Three";
  const currentStepValue = currentStep.value != null ? currentStep.value : 0;
  const primaryColorValue = primaryColor.value || "#0d0d0d";

  const stepTitles = stepsValue.split(',').map(title => title.trim());
  const totalSteps = stepTitles.length;

  const mainColor = primaryColorValue; // Renamed variable
  const grayColor = '#eaeaea';
  const darkGrayColor = '#9d9d9d';

  let progressBarHtml = '<div class="progress-container" style="display: flex; align-items: center;">';

  for (let i = 0; i < totalSteps; i++) {
    const isCompleted = i < currentStepValue;
    const isCurrent = i === currentStepValue;
    const isFuture = i > currentStepValue;

    const opacity = isCompleted ? 0.6 : 1;
    const borderColor = isCompleted ? darkGrayColor : isCurrent ? mainColor : grayColor;
    const backgroundColor = isCompleted ? darkGrayColor : isCurrent ? mainColor : 'white';
    const textColor = isCompleted || isCurrent ? 'white' : 'black';
    const circleContent = isCompleted ? '✔︎' : i + 1;
    const stepTitle = stepTitles[i];

    const circleStyle = `
      width: 22px;
      height: 22px;
      border: 1px solid ${borderColor};
      border-radius: 0.5rem;
      background-color: ${backgroundColor};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      opacity: ${opacity};
    `;

    progressBarHtml += `
      <div style="display: flex; align-items: center; margin: 0 5px;">
        <div class="circle" style="${circleStyle}">
          <span style="color: ${textColor}; opacity: ${opacity}; font-size: 12px; font-weight: 500;">
            ${circleContent}
          </span>
        </div>
        <span style="margin-left: 8px; font-size: 12px; font-weight: 500; opacity: ${opacity};">
          ${stepTitle}
        </span>
      </div>
    `;

    if (i < totalSteps - 1) {
      const lineColor = isCompleted ? darkGrayColor : grayColor;
      const lineOpacity = isCompleted ? 0.6 : 1;

      const lineStyle = `
        height: 1px;
        flex: 1;
        background-color: ${lineColor};
        margin: 0 5px;
        opacity: ${lineOpacity};
      `;

      progressBarHtml += `<div class="line" style="${lineStyle}"></div>`;
    }
  }

  progressBarHtml += '</div>';
  return progressBarHtml;
}
