<div class="form-group row">
    <label for="subject" class="col-sm-3 control-label">Name <span class="text-danger">*</span></label>
    <div class="col-sm-9">
        [text* Name id:name-order class:form-control]
    </div>
</div>
<div class="form-group row">
    <label for="subject" class="col-sm-3 control-label">Email <span class="text-danger">*</span></label>
    <div class="col-sm-9">
        [email* Email id:email-order class:form-control]
    </div>
</div>
<div class="form-group row">
    <label for="subject" class="col-sm-3 control-label">Services</label>
    <div class="col-sm-9 ">
        <div class="form-control">
            [checkbox Hosting exclusive "Manage my Hosting & Setup (Annual Fee)"]
            [checkbox Domain exclusive "Manage my Domain (Package extra)"]
        </div>
    </div>
</div>
<div class="form-group row">
    <label for="subject" class="col-sm-3 control-label">Web Package</label>
    <div class="col-sm-9">
        [select Package id:package-choice class:form-control include_blank "Budget" "Premium" "Business" "Enterprise" "Other/Custom"]
    </div>
</div>
<div class="form-group row">
    <label for="message" class="col-sm-3 control-label">Project details</label>
    <div class="col-sm-9">
        [textarea message class:form-control 40x5]
    </div>
</div>
<div class="form-check">
    [acceptance ToS class:form-check-input]
    <label class="form-check-label" for="defaultCheck1">

        You accept TechGorilla Terms of Service <span class="text-danger">*</span>
    </label>
    [/acceptance]
</div>
<div class="form-group">
    <div class="col-sm-4 mx-auto">

        [submit class:btn class:btn-primary "Submit Enquiry"]
    </div>
</div>