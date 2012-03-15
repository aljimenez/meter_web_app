<!-- Templates -->
<script type="text/template" id="tpl-dashboard">
<div class="span5">
  <table class="table table-bordered">
    <thead>
      <tr>
        <td></td>
        <th class="centered">
          Today
        </th>
        <th class="centered">
          Average
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          Energy input
        </th>
        <td class="centered">
          <span class="e-in cur">100</span>
        </td>
        <td class="centered">
          <span class="e-in avg">56</span>
        </td>
      </tr>
      <tr>
        <th>
          Energy output
        </th>
        <td class="centered">
          <span class="e-out cur">96</span>
        </td>
        <td class="centered">
          <span class="e-out avg">50</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="span6">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>
          Circuits Active:
        </th>
        <td class="centered">
          <span class="circuits-active">8</span>
        </td>
        <td>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          Circuits Total:
        </th>
        <td class="centered">
          <span class="circuits-total">12</span>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th colspan="3">
        </th>
      </tr>
      <tr>
        <th>
          Latest Sync:
        </th>
        <td class="centered">
          <span class="latest-sync">2 hours ago</span>
        </td>
        <td>
          <span class="latest-sync-threshold">
            (max 12 hours)
          </span>
        </td>
      </tr>
      <tr>
        <th>
          Latest SMS:
        </th>
        <td class="centered">
          <span class="latest-sms">20 minutes ago</span>
        </td>
        <td>
          <span class="latest-sms-id">
            800.555.1212
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</script>

<!-- JavaScript -->
<script type="text/javascript" src="js/dashboard/dashboardPage.js"></script>