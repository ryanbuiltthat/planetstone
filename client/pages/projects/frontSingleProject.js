/**
 * Created by Ryan on 8/27/2015.
 */
Template.frontSingleProject.onCreated(function(){
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function(){
        var handle = self.subscribe('frontSingleProject', FlowRouter.getParam('projectSlug'));
        self.ready.set(handle.ready());

    })
});
Template.frontSingleProject.onRendered(function(){
    this.autorun(function(){
        // HTML5 kills our autofocus on modals so we need to hack it back
        $('#infoModal').on('shown.bs.modal', function() {
            $(document).find("#infoReqText").focus();
        });
    });
    Meteor.setTimeout(function(){
        $("#gallery").lightGallery();
        // Houzz
        (function(d,s,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.houzz.com/js/widgets.js?"+(new Date().getTime());var ss=d.getElementsByTagName(s)[0];ss.parentNode.insertBefore(js,ss);}})(document,"script","houzzwidget-js");

        //
        $('input[type=radio], input[type=checkbox],input[type=number],select').uniform();

        // Init base scripts
        planet_stone.init();
        planet_stone.load();
    }, 850);
});
Template.frontSingleProject.helpers({
    'subsReady': function(){
        return Template.instance().ready.get();
    },
    'project': function() {
        return Projects.findOne({ slug: FlowRouter.getParam('projectSlug') });
    },
    nextProject:function(){
        var nxtProject = NextProject.findOne();
        var nxtCat = NextCategory.findOne();
        var out = '/projects/'+nxtCat.slug+'/'+nxtProject.slug;
        return out || "#";
    },
    prevProject:function(){
        var prvProject = PreviousProject.findOne();
        var prvCat = PrevCategory.findOne();
        var out = '/projects/'+prvCat.slug+'/'+prvProject.slug;
        return out;
    },
    'projectImage': function(pics){
        return ProjectImages.find({ _id: { $in: pics }});
    },
    getTitle:function(){
        var parent = Template.parentData(1);
        return parent.name;
    },
    getDesc: function(){
        var parent = Template.parentData(1);
        return parent.desc;
    },
    getId: function(){
        var parent = Template.parentData(1);
        return parent._id;
    },
    getSharePageURL: function(){
        var parent = Template.parentData(1);
        //return encodeURIComponent("//planetstone-52463.onmodulus.net/projects/"+parent.slug);
        return encodeURIComponent(process.env.ROOT_URL+"/projects/"+parent.slug);
    },
    getShareImageURL: function(id, name){
        var parent = Template.parentData(1);
        var img = ProjectImages.findOne({ _id: id});
        //return encodeURIComponent("//planetstone-52463.onmodulus.net/"+img.url({store:"galleryThumb",auth:false}));
        return encodeURIComponent(process.env.ROOT_URL+"/"+img.url({store:"galleryThumb",auth:false}));
    },
    //shareData: function(project){
    //    //console.log(project);
    //    var thumb = ProjectImages.findOne({ _id: { $in: project.images }});
    //    return {
    //        title: project.name,
    //        author: 'Planet Stone Marble Granite',
    //        summary: project.desc,
    //        thumbnail: thumb.url({store:'galleryThumb',auth:false}),
    //        media: "//planetstone-50636.onmodulus.net"+thumb.url({store:'galleryThumb', auth:false}),
    //        description: project.desc
    //    }
    //},
    //getAssociatedProduct: function(id){
    //        return Products.find({_id: {$in: id}});
    //},
    //getAssociatedType: function(id){
    //    Template.instance().subscribe('singleType', id);
    //    return Types.find({ _id: id });
    //},
    //getAssociatedProductThumbnail: function(images){
    //        return ProductImages.find({_id: {$in: images}});
    //},
    //getAssociatedProductColors: function(colors){
    //    Template.instance().subscribe('allColors', colors);
    //    return Colors.find({ _id: { $in: colors } });
    //}
});

Template.frontSingleProject.events({
    'click a.btn-heart':function(e,t){
        //e.preventDefault();
    },
    'click .tabs>a': function(e,t){
        e.preventDefault();
        $('.content .tab-content').hide().first().show();
        $('.content .tabs li:first').addClass('current');
        $(e.currentTarget).closest('li').addClass('current').siblings().removeClass('current');
        $($(e.currentTarget).attr('href')).show().siblings('.tab-content').hide();
    },
    'focus #birthDate': function(e){
        $(e.currentTarget).datepicker("show");
    },
    'click .houzz-btn':function(e,t){
        //http://www.houzz.com/imageClipperUpload?link=%2F%2Fplanetstone-50636.onmodulus.net%2Fproducts%2F2Xp3qGNwodyxuDht6%2F&amp;source=button&amp;hzid=33569&amp;imageUrl=%2Fcfs%2Ffiles%2Fprojectimages%2FDWGqsCedwAeSxL7MG%2FImage4.jpg%3Ftoken%3DeyJhdXRoVG9rZW4iOiIifQ%253D%253D%26store%3Dfr&amp;title=White+%26+Modern+Kitchen&amp;ref=http%3A%2F%2Flocalhost%3A3000%2Fprojects%2Fkitchens%2Fwhite-modern-kitchen"
        // onclick="addToHouzz();
        // return false;"
        // class="houzz-button"
        // target="_blank"></a>

            //function addToHouzz() {
            //    var popout = 'http://www.houzz.com/imageClipperUpload?link=%2F%2Fplanetstone-50636.onmodulus.net%2Fproducts%2F2Xp3qGNwodyxuDht6%2F&source=button&hzid=33569&imageUrl=%2Fcfs%2Ffiles%2Fprojectimages%2FDWGqsCedwAeSxL7MG%2FImage4.jpg%3Ftoken%3DeyJhdXRoVG9rZW4iOiIifQ%253D%253D%26store%3Dfr&title=White+%26+Modern+Kitchen&ref=http%3A%2F%2Flocalhost%3A3000%2Fprojects%2Fkitchens%2Fwhite-modern-kitchen';
            //    var popupWidth = 900;
            //    var popupHeight = 480;
            //    var left = Math.floor((screen.width - popupWidth)/2);
            //    var top = Math.floor((screen.height - popupHeight)/2);
            //    window.open(popout, 'HOUZZ' + new Date().getTime(), 'status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=' + popupWidth + ',height=' + popupHeight + ',left=' + left + ',top=' + top);
            //}

    }
});