import {FormField} from '@eclipse-scout/core';

export default function() {
  return {
    id: 'hellojs.HelloForm',
    displayHint: 'view',
    modal: false,
    rootGroupBox: {
      id: 'MainBox',
      objectType: 'GroupBox',
      fields: [
        {
          id: 'DetailBox',
          objectType: 'GroupBox',
          cssClass: 'detail-box',
          gridColumnCount: 1,
          gridDataHints: {
            fillHorizontal: false,
            fillVertical: false,
            horizontalAlignment: 0,
            verticalAlignment: 0,
            widthInPixel: 450,
            weightY: 1
          },
          bodyLayoutConfig: {
            vgap: 25
          },
          fields: [
            {
              id: 'NameField',
              objectType: 'StringField',
              label: '${textKey:Name}',
              labelPosition: FormField.LabelPosition.TOP,
              statusVisible: false
            },
            {
              id: 'GreetButton',
              objectType: 'Button',
              label: '${textKey:Hello}',
              processButton: false,
              defaultButton: true,
              keyStroke: 'enter'
            }
          ]
        }
      ]
    }
  };
}
