var express = require('express');
var app = express();

app.get('/GetTemplateStepList', function (req, res) {
  res.send([
    ({
      Title: '專案規劃',
      SelectedFlag: true,
      ItemList: [
        ({
          Title: 'PM 是否已了解合約內容',
          Description: '預計完成日與 KickOff 預計完成日相同',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }),
        ({
          Title: 'kickoff 簡報',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }),
        ({
          Title: '專案時程計畫表',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        })
      ]
    }),
    ({
      Title: '種子教育訓練',
      SelectedFlag: false,
      ItemList: [
        ({
          Title: '教育訓練計畫(時程、任務)',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        }),
        ({
          Title: '教育訓練簽到單',
          Description: '',
          PlanDueDay: '',
          State: StateType.WaitStart,
          IsNew: false,
          RequireFlag: true
        })
      ]
    })
  ]);
});

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
