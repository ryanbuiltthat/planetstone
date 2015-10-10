/**
 * Created by Ryan on 8/24/2015.
 */
Schemas.Team = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    },
    position: {
        type: String,
        label: "Position",
        optional: true,
    },
    bio: {
        type: String,
        label: "Bio",
        optional: true,
        max: 15000,
        autoform:{
            afFieldInput:{
                type: "froala",
                inlineMode: false,
                toolbarFixed: false,
                imageUpload: false,
                height: '350',
                allowStyle: true,
                theme: 'dark',
                spellcheck: true,
                allowedTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                fontList: {
                    'Roboto Slab': 'Roboto Slab',
                    '\'Raleway\', Arial, Helvetica': 'Raleway, Helvetica',
                    '\'Times New Roman\', serif': 'Times New Roman'
                },
                blockTags: {
                    n: 'Normal',
                    h1: 'Heading 1',
                    h2: 'Heading 2',
                    h3: 'Heading 3',
                    h4: 'Heading 4',
                    h5: 'Heading 5',
                    h6: 'Heading 6'
                },
                blockStyles: {
                    'p': {
                        'text-muted': 'Muted',
                        'text-primary': 'Primary',
                        'text-success': 'Success',
                        'text-info': 'Info',
                        'text-warning': 'Warning',
                        'text-danger': 'Danger',
                        'lead': 'Graph Lead'
                    }
                },
                imageLink: false,
                buttons: ['bold', 'italic', 'underline', 'strikethrough', 'fontFamily', 'fontSize', 'formatBlock', 'blockStyle', 'inlineStyle', 'align', 'insertOrderedList', 'insertUnorderedList', 'selectAll', 'table', 'undo', 'redo', 'removeFormat','fullscreen']
            }
        }
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        autoform:{
            afFieldInput:{
                label: false,
                type: "hidden"
            }
        },
        optional: true,
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
    images: {
        type: [String],
        optional: true
    }
});
Teams.attachSchema(Schemas.Team);