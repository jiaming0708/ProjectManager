var express = require('express');
var app = express();

let steList = [
  ({
    Title: '專案規劃',
    SelectedFlag: true,
    ItemList: [
      ({
        Title: 'PM 是否已了解合約內容',
        Description: '預計完成日與 KickOff 預計完成日相同',
        PlanDueDay: '',
        State: 1,
        IsNew: false,
        RequireFlag: true
      }),
      ({
        Title: 'kickoff 簡報',
        Description: '',
        PlanDueDay: '',
        State: 1,
        IsNew: false,
        RequireFlag: true
      }),
      ({
        Title: '專案時程計畫表',
        Description: '',
        PlanDueDay: '',
        State: 1,
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
        State: 1,
        IsNew: false,
        RequireFlag: true
      }),
      ({
        Title: '教育訓練簽到單',
        Description: '',
        PlanDueDay: '',
        State: 1,
        IsNew: false,
        RequireFlag: true
      })
    ]
  })
];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .post('/GetTemplateStepList', function (req, res) {
    res.send({
      Result: true,
      StepList: steList
    });
  })
  .post('/CreateProjectCheckList', function (req, res) {
    res.send({
      Result: true
    });
  })
  .post('/GetStepListByProjectId/:id', function (req, res) {
    res.send({
      Result: true,
      StepList: steList
    });
  })
  .post('/UpdateTemplateCheckList', function (req, res) {
    res.send({
      Result: true,
      StepList: steList
    });
  })
  .post('/ChangeItemState', function (req, res) {
    res.send({
      Result: true
    });
  })
  .post('/ExtendItem', function (req, res) {
    res.send({
      Result: true
    });
  })
  .post('/CheckItem', function (req, res) {
    res.send({
      Result: true
    });
  });

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
